from webbrowser import open
import shutil
import keyboard
from PyPDF2 import PdfWriter, PdfReader
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import io
from builtins import open
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
import pyautogui
import time

pdfmetrics.registerFont(TTFont('Montserrat', 'Montserrat.ttf'))

print("Move your mouse to the desired point. Press Ctrl+C to stop.")

try:
    while True:
        x, y = pyautogui.position()
        print(f"Mouse position: ({x}, {y})")
        time.sleep(1)  # Print every second
except KeyboardInterrupt:
    print("\nStopped.")