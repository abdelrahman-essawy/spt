import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { PostChatMessageMutationRequest, PostChatMessageMutationResponse, PostChatMessageHeaderParams } from "../../../types/PostChatMessage";

 /**
 * @summary message
 * @link /chat/message
 */
export async function postChatMessage(data?: PostChatMessageMutationRequest, headers?: PostChatMessageHeaderParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostChatMessageMutationResponse>["data"]> {
    const formData = new FormData();
    if (data) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (typeof key === "string" && (typeof value === "string" || value instanceof Blob)) {
                formData.append(key, value);
            }
        });
    }
    const res = await client<PostChatMessageMutationResponse, PostChatMessageMutationRequest>({ method: "post", url: `/chat/message`, baseURL: "http://{{local}}", data: formData, headers: { "Content-Type": "multipart/form-data", ...headers, ...options.headers }, ...options });
    return res.data;
}