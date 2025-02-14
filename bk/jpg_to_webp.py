# 开发人员 ：allan
# 开发时间 ：2025/2/14  16:16
# 文件名称 : jpg_to_webp.py
# 开发工具 : PyCharm
from PIL import Image

def jpg_to_webp(input_path, output_path, quality=80):
    """
    将 JPG 格式的图片转换为 WebP 格式。

    :param input_path: 输入的 JPG 图片路径
    :param output_path: 输出的 WebP 图片路径
    :param quality: 转换后的 WebP 图片质量（范围：1-100）
    """
    try:
        # 打开图片
        with Image.open(input_path) as img:
            # 确保图片模式为 RGB（避免出现模式不兼容问题）
            if img.mode != "RGB":
                img = img.convert("RGB")
            # 保存为 WebP 格式
            img.save(output_path, format="WEBP", quality=quality)
        print(f"图片已成功转换为 WebP 格式并保存到 {output_path}")
    except Exception as e:
        print(f"转换失败: {e}")

# 示例用法
input_image = "/Users/nengjiezhu/File/暂存/头像1.png"  # 输入的 JPG 文件名
output_image = "avatar3.webp"  # 输出的 WebP 文件名
jpg_to_webp(input_image, output_image, quality=100)