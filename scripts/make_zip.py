import os
import zipfile
import time

def create_posix_zip(source_dir, output_zip):
    with zipfile.ZipFile(output_zip, 'w', compression=zipfile.ZIP_DEFLATED) as z:
        # Directories to include
        dirs_to_add = ['styles', 'scripts', 'assets', 'docs']
        for d in dirs_to_add:
            d_path = os.path.join(source_dir, d)
            if os.path.exists(d_path):
                # Directory entry
                dir_info = zipfile.ZipInfo(d + '/')
                dir_info.date_time = time.localtime(time.time())[:6]
                dir_info.external_attr = (0o755 | 0o40000) << 16  # drwxr-xr-x
                z.writestr(dir_info, '')

                for root, _, files in os.walk(d_path):
                    for file in files:
                        file_path = os.path.join(root, file)
                        rel_path = os.path.relpath(file_path, source_dir).replace('\\', '/')
                        with open(file_path, 'rb') as f:
                            data = f.read()
                        f_info = zipfile.ZipInfo(rel_path)
                        f_info.date_time = time.localtime(os.path.getmtime(file_path))[:6]
                        f_info.external_attr = (0o644 | 0o100000) << 16  # -rw-r--r--
                        z.writestr(f_info, data)

        # Root files
        for f_name in ['index.html', 'devcrew-ai-wireframe-spec.md']:
            f_path = os.path.join(source_dir, f_name)
            if os.path.exists(f_path):
                with open(f_path, 'rb') as f:
                    data = f.read()
                f_info = zipfile.ZipInfo(f_name)
                f_info.date_time = time.localtime(os.path.getmtime(f_path))[:6]
                f_info.external_attr = (0o644 | 0o100000) << 16  # -rw-r--r--
                z.writestr(f_info, data)

if __name__ == '__main__':
    src = r'c:\Users\Frederick\OneDrive\Desktop\ups'
    out_desktop = r'c:\Users\Frederick\OneDrive\Desktop\devcrew-wireframe.zip'
    out_ups = r'c:\Users\Frederick\OneDrive\Desktop\ups\devcrew-wireframe.zip'
    create_posix_zip(src, out_desktop)
    create_posix_zip(src, out_ups)
    print('POSIX zip archives created successfully with full read permissions.')

