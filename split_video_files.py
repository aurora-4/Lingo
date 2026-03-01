import subprocess
import math
import os

def split_video(input_file, output_dir=None, segment_length_minutes=6):
    # Convert minutes to seconds
    segment_length = segment_length_minutes * 60

    # Default output directory: Desktop\SplitVideos
    if not output_dir:
        output_dir = os.path.join(os.path.expanduser("~"), "Desktop", "SplitVideos")

    os.makedirs(output_dir, exist_ok=True)

    # Get total duration using ffprobe
    cmd_duration = [
        'ffprobe', '-v', 'error', '-show_entries', 'format=duration',
        '-of', 'default=noprint_wrappers=1:nokey=1', input_file
    ]
    duration = float(subprocess.check_output(cmd_duration).decode().strip())

    total_segments = math.ceil(duration / segment_length)

    print(f"Total video duration: {duration:.2f} seconds ({duration/60:.1f} minutes).")
    print(f"Splitting into {total_segments} segments of {segment_length_minutes} minutes each...")
    print(f"Output directory: {output_dir}\n")

    base_name = os.path.splitext(os.path.basename(input_file))[0]

    for i in range(total_segments):
        start_time = i * segment_length
        output_file = os.path.join(output_dir, f"{base_name}_part{i+1}.mp4")

        print(f"[{i+1}/{total_segments}] Creating part {i+1} (start={start_time:.0f}s)...")

        # IMPORTANT: -ss AFTER -i ensures accurate seeking when using -c copy
        # Using -avoid_negative_ts make_zero to handle PTS issues at cut points
        cmd = [
            'ffmpeg', '-y',
            '-i', input_file,
            '-ss', str(start_time),
            '-t', str(segment_length),
            '-c', 'copy',
            '-avoid_negative_ts', 'make_zero',
            output_file
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode != 0:
            print(f"  ERROR creating part {i+1}!")
            print(result.stderr[-500:])  # Show last 500 chars of ffmpeg error
        else:
            size_mb = os.path.getsize(output_file) / (1024 * 1024)
            print(f"  Created: {output_file} ({size_mb:.1f} MB)")

    print("\nDone!")

if __name__ == "__main__":
    file_to_split = input("Enter the path to the video file: ").strip().strip('"')
    if not os.path.exists(file_to_split):
        print(f"Error: File '{file_to_split}' not found.")
    else:
        default_dir = os.path.join(os.path.expanduser("~"), "Desktop", "SplitVideos")
        print(f"Default output: {default_dir}")
        out = input(f"Enter output directory (press Enter for default): ").strip().strip('"')
        output_dir = out if out else default_dir
        split_video(file_to_split, output_dir=output_dir)
