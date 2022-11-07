import { useState, useEffect, useCallback, useRef } from "react";

import hash from "hash-it";
import qs from "qs";

import { USER_TOKEN_FIELD } from "../utils/constants";

type Method = "post" | "get" | "patch" | "put" | "delete";
type Body = BodyInit | undefined | Object;
type ReqParams<T> = Omit<Options<T>, "method">;
type ReqParamsWithoutBody<T> = Omit<Options<T>, "method" | "body">;
type FnReqParams<T> = (params: ReqParams<T>) => void;
type FnReqParamsWithoutBody<T> = (params: ReqParamsWithoutBody<T>) => void;

interface Options<T> {
  endpoint?: string;
  method?: Method;
  query?: unknown;
  body?: Body;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}

interface HookReturn<T> {
  response: T | undefined;
  error: unknown;
  loading: boolean;
  get: FnReqParamsWithoutBody<T>;
  post: FnReqParams<T>;
  patch: FnReqParams<T>;
  put: FnReqParams<T>;
  destroy: FnReqParamsWithoutBody<T>;
}

export default function useApiFetch<T>(
  options: Options<T> = {},
  deps?: unknown[][],
): HookReturn<T> {
  const { method, endpoint, query, body, onSuccess, onError } = options;
  const reloadHash = hash(deps);

  const [result, setResult] = useState<{
    response: T | undefined;
    error: unknown;
    loading: boolean;
  }>({
    response: undefined,
    error: null,
    loading: false,
  });

  const refAbortController = useRef(new AbortController());

  const fetchData = useCallback(
    async (fetchParams: {
      endpoint?: string;
      method?: Method;
      query?: unknown;
      body?: Body;
    }): Promise<void> => {
      if (fetchParams.endpoint == null || !fetchParams.method) {
        throw new Error("Required parameters missing");
      }

      setResult((prev) => ({ ...prev, error: null, loading: true }));
      try {
        const isFormData = fetchParams.body instanceof FormData;
        const headers = new Headers();
        headers.append("Accept", "application/json");

        if (!isFormData) {
          headers.append("Content-Type", "application/json");
        }

        const token = localStorage.getItem(USER_TOKEN_FIELD);
        if (token) {
          headers.append("Authorization", `Bearer ${token}`);
        }

        const queryStr = qs.stringify(fetchParams.query);
        const url = `${process.env.REACT_APP_API_BASE_URL}/${fetchParams.endpoint}`;
        const fullUrl = !queryStr ? url : `${url}?${queryStr}`;

        const requestBody = !fetchParams.body
          ? undefined
          : ((isFormData
              ? fetchParams.body
              : JSON.stringify(fetchParams.body)) as string);

        const params = {
          headers,
          body: requestBody,
          method: fetchParams.method,
          signal: refAbortController.current.signal,
        };

        const res = await fetch(fullUrl, params);
        const response = await res.json();
        if (!refAbortController.current.signal.aborted) {
          setResult((prev) => ({ ...prev, response }));
          if (onSuccess) {
            onSuccess(response);
          }
        }
      } catch (error) {
        setResult((prev) => ({ ...prev, error }));
        if (onError) {
          onError(error);
        }
      } finally {
        setResult((prev) => ({ ...prev, loading: false }));
      }
    },
    [onSuccess, onError],
  );

  useEffect(() => {
    if (endpoint && method) {
      void fetchData({ endpoint, method, query, body });
    }

    const controller = refAbortController.current;

    return () => {
      controller.abort();
    };
  }, [fetchData, endpoint, method, query, body, reloadHash]);

  const post = useCallback(
    async (params: ReqParams<T>) =>
      await fetchData({ ...params, method: "post" }),
    [fetchData],
  );

  const get = useCallback(
    async (params: ReqParamsWithoutBody<T>) =>
      await fetchData({ ...params, method: "get" }),
    [fetchData],
  );

  const patch = useCallback(
    async (params: ReqParams<T>) =>
      await fetchData({ ...params, method: "patch" }),
    [fetchData],
  );

  const put = useCallback(
    async (params: ReqParams<T>) =>
      await fetchData({ ...params, method: "put" }),
    [fetchData],
  );

  const destroy = useCallback(
    async (params: ReqParamsWithoutBody<T>) =>
      await fetchData({ ...params, method: "delete" }),
    [fetchData],
  );

  return { ...result, get, post, patch, put, destroy };
}
