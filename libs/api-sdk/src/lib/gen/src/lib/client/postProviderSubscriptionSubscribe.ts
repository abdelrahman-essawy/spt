import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostProviderSubscriptionSubscribeMutationRequest, PostProviderSubscriptionSubscribeMutationResponse, PostProviderSubscriptionSubscribeHeaderParams } from "../../../types/PostProviderSubscriptionSubscribe";

 /**
 * @summary subscribe
 * @link /provider/subscription/subscribe
 */
export async function postProviderSubscriptionSubscribe(data?: PostProviderSubscriptionSubscribeMutationRequest, headers?: PostProviderSubscriptionSubscribeHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostProviderSubscriptionSubscribeMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostProviderSubscriptionSubscribeMutationResponse, PostProviderSubscriptionSubscribeMutationRequest>({ method: "post", url: `/provider/subscription/subscribe`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}