from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import os
import subprocess
import time

class ChangeHandler(FileSystemEventHandler):
    def __init__(self, server_process):
        self.server_process = server_process

    def on_any_event(self, event):
        # Restart the server on any file change
        print("Change detected. Restarting server...")
        self.server_process.terminate()
        self.server_process = subprocess.Popen(["python", "-m", "http.server", "8000"])

if __name__ == "__main__":
    # Ensure the script runs inside the 'public' folder
    path = os.getcwd()
    if not path.endswith("public"):
        print("Please run this script from the 'public' folder.")
        exit(1)

    # Start the server
    server_process = subprocess.Popen(["python", "-m", "http.server", "8000"])

    # Watch for file changes
    event_handler = ChangeHandler(server_process)
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        server_process.terminate()

    observer.join()