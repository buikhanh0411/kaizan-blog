---
layout: layout.njk
title: "Cách cài Ventoy cho Linux"
---

# Cách cài Ventoy cho Linux 

## Mở đầu 
Chào các bạn nha, đây là bài viết mình sẽ chỉ các bạn cách cài Ventoy lên usb của mình 

## Cách cài đặt 
Tùy vào hệ điều hành các bạn đang sử dụng ta sẽ tải các file sau
* [Windows](https://github.com/ventoy/Ventoy/releases/download/v1.1.10/ventoy-1.1.10-windows.zip)
* [Linux](https://github.com/ventoy/Ventoy/releases/download/v1.1.10/ventoy-1.1.10-linux.tar.gz)

Mình đang sử dụng Linux nên mình sẽ hướng dẫn trên Linux luôn

Sau khi tải xong các bạn sẽ có 1 tệp thư mục, ta sẽ giải nén nó ra và được các file sau 

{% image "./images/shotgun_20260314_161900.png", "Screenshot of Ventoy folder structure" %}

Ở đây ta có 2 lựa chọn (hoặc có thể hơn):
* VentoyGUI: sẽ mở app có giao diện để cài (Yêu cầu cấp quyền chạy trước)
* VentoyWeb: Chạy trên web đơn giản thế thui 

## Cách 1: Dùng Gui 

Mình sẽ sử dụng Terminal để cấp quyền (Giả định máy bạn là 64-bit nhé nếu 32-bit thì chạy file VentoyGUI.i386) 
```
sudo chmod +x VentoyGUI.x86_64
```

Sau khi nhập mật khẩu của các ní vô ta chạy tiếp lệnh sau 
```
sudo ./VentoyGUI.x86_64
```

Các bạn sẽ có được giao diện như này: 

{% image "./images/shotgun_20260314_164140.png" , "Ventoy gui"%}

Sau đó các bạn lựa chọn usb của mình và ấn install thế là xong 👍

## Cách 2: Dùng Web 

Cũng ở terminal đó các bạn có thể dùng Web
Các bạn chạy lệnh sau: 

```
sudo ./VentoyWeb.sh
```

Sau đó terminal sẽ hiện như sau: 

{% image "./images/shotgun_20260314_164535.png" , "Ventoy Web"%}

Các bạn truy cập vào địa chỉ https://127.0.0.1:xxx đó trên trình duyệt và sẽ vô được: 

{% image "./images/shotgun_20260314_164818.png" , "Ventoy Web"%}

## Tóm tắt
Như vậy là mình đã hướng dẫn xong các bạn 2 cách để cài Ventoy trên Linux. Tóm lại:
1. **Tải và giải nén** bộ cài từ trang chủ.
2. **Cấp quyền** thực thi cho file GUI hoặc chạy script Web.
3. **Cài đặt** lên USB chỉ với 1 cú click.

Chúc các bạn thành công và có một chiếc USB boot thật xịn sò!


