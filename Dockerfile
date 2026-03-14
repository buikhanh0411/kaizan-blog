# Bước 1: Build trang web với Bun
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy các file quản lý package
COPY package.json bun.lock ./

# Cài đặt dependencies
RUN bun install

# Copy toàn bộ mã nguồn vào
COPY . .

# Build trang web tĩnh (Eleventy mặc định xuất ra thư mục _site)
RUN bunx @11ty/eleventy

# Bước 2: Dùng Nginx để phục vụ file tĩnh
FROM nginx:alpine

# Copy các file đã build từ builder sang Nginx
COPY --from=builder /app/_site /usr/share/nginx/html

# Mở port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
