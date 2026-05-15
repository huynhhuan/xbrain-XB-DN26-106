## Strategy
**Manual Deployment via AWS Console (Zip upload)**
- Wrapper: `serverless-http`

## Reason
- **Minimal Code Changes**: Chỉ thêm 1 file `lambda.js` và cài thêm thư viện `serverless-http`. Không sửa bất kỳ dòng code nào trong `app.js`.
- **Dễ thực hiện**: Triển khai trực tiếp trên trình duyệt mà không cần cài đặt công cụ (CLI) phức tạp.
- **Phù hợp thực hành cá nhân**: Giúp hiểu rõ luồng hoạt động từ nén code, tạo Lambda đến cấu hình API Gateway.

## Cold Start Measurement
- **Environment**: AWS Lambda (nodejs22.x, arm64, 256MB RAM)
- **Measured Cold Start (Init Duration)**: 309.98 ms.
- **Cách đo**:
    1. Upload lại file .zip để kích hoạt Cold Start.
    2. Gọi API ngay lập tức.
    3. Vào CloudWatch Logs, tìm dòng `REPORT` có chứa giá trị `Init Duration`.
<img width="2973" height="1581" alt="image" src="https://github.com/user-attachments/assets/b745ef1d-08c1-4c4f-84d6-9ccbd2cfca6e" />
