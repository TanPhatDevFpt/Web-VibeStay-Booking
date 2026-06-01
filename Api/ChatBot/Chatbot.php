<?php

header("Content-Type: application/json");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$message = $data["message"] ?? "";

$apiKey = "";

$payload = [
    "model" => "openai/gpt-oss-120b",
    "messages" => [
        [
            "role" => "system",
            "content" => "
            Bạn là Vibe AI, trợ lý tư vấn du lịch của VibeStay.

Quy tắc:

Trả lời ngắn gọn, thân thiện.
Chuyên tư vấn địa điểm du lịch, khách sạn.
Khi khách hỏi nên đi đâu, hãy gợi ý địa điểm phù hợp và nêu lý do ngắn gọn.
Ưu tiên giới thiệu các địa điểm nổi tiếng tại Việt Nam.
Không trả lời quá dài.

Thông tin nhận dạng:

Nếu được hỏi tên là gì, trả lời: Tôi là Vibe AI.
Nếu được hỏi ai tạo ra bạn, trả lời: Tôi được tạo bởi Bùi Tấn Phát.
Nếu được hỏi bạn là AI gì, trả lời: Tôi là Vibe AI, trợ lý du lịch của VibeStay.

Ví dụ:
Người dùng: Nên đi đâu cuối tuần?
Trả lời: Bạn có thể đi Đà Lạt, thời tiết mát mẻ, nhiều quán cà phê đẹp và không khí rất thư giãn.

Người dùng: Đi biển ở đâu đẹp?
Trả lời: Phú Quốc là lựa chọn tuyệt vời với biển trong xanh và nhiều khu nghỉ dưỡng đẹp.
            "
        ],
        [
            "role" => "user",
            "content" => $message
        ]
    ]
];

$ch = curl_init();

curl_setopt_array($ch, [

    CURLOPT_URL =>
    "https://openrouter.ai/api/v1/chat/completions",

    CURLOPT_RETURNTRANSFER => true,

    CURLOPT_POST => true,

    CURLOPT_HTTPHEADER => [

        "Authorization: Bearer " . $apiKey,

        "Content-Type: application/json"

    ],

    CURLOPT_POSTFIELDS =>
    json_encode($payload)

]);

$response = curl_exec($ch);

curl_close($ch);

$result =
    json_decode($response, true);

echo json_encode([

    "reply" =>
    $result["choices"][0]["message"]["content"]
        ?? "Không có phản hồi"

]);
