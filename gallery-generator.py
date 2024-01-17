import os

image_directories = [
    "images/gallery/Detail",
    "images/gallery/FF__Group",
    "images/gallery/Moment",
    "images/gallery/Portrait",
]

image_filenames = [
    file
    for directory in image_directories
    for file in os.listdir(directory)
]


# 2. Map each filename to HTML
render_image_path_to_html = lambda image_path: f"""<div class="image fit">
    <a href="{image_path}">
        <img src="{image_path}"/>
    </a>
</div>
"""

# 3. Write the HTML file
with open("gallery-images.html", "w") as html_file:
   html_file.write("") # Clear the file
   for image in image_filenames:
      html_file.write(render_image_path_to_html(image))

print("Gallery images HTML file generated successfully!")