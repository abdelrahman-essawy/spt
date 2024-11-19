import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetLandingMostRatedProvidersQueryResponse, GetLandingMostRatedProvidersQueryParams } from "../../../types/GetLandingMostRatedProviders";

 /**
 * @summary most_rated_providers
 * @link /landing/most_rated_providers
 */
export async function getLandingMostRatedProviders(params?: GetLandingMostRatedProvidersQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetLandingMostRatedProvidersQueryResponse>["data"]> {
    const res = await client<GetLandingMostRatedProvidersQueryResponse>({ method: "get", url: `/landing/most_rated_providers`, baseURL: "http://{{local}}", params, ...options });
    return res.data;
}