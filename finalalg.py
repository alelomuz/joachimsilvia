import webbrowser as web

import time
import pyautogui
import pyperclip
from typing import Union
import os
import pathlib
import time
from platform import system
from urllib.parse import quote
from webbrowser import open
import shutil
import keyboard
from PyPDF2 import PdfFileWriter, PdfReader
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import io
import pandas as pd
import sys
import numpy
import webbrowser as web
import time
import pyautogui
import pyperclip
from typing import Union
import os
import pathlib
import time
from platform import system
from urllib.parse import quote
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
pdfmetrics.registerFont(TTFont('Montserrat', 'Montserrat.ttf'))

# Ensure the "inviti" folder exists
output_folder = "inviti"
os.makedirs(output_folder, exist_ok=True)

df = pd.read_csv("Invitati.csv", delimiter=',')
for index, row in df.iterrows():
    name = row['Nome'].upper()
    language = row['Lingua']
    number = row['Numero']
    
    packet = io.BytesIO()
    can = canvas.Canvas(packet, pagesize=letter)
    
    # Set the font and size
    font_name = "Montserrat"
    font_size = 10.9
    can.setFont(font_name, font_size)
    
    # Set character spacing
    char_spacing = 4.5
    can._charSpace = char_spacing
    
    # Calculate the width of the text and center it on the x-axis
    text_width = can.stringWidth(name, font_name, font_size) + char_spacing * (len(name) - 1)
    x_centered = (500 - text_width) / 2
    
    # Draw each character with the specified spacing
    for char in name:
        if language == "it":
            can.drawString(x_centered, 158, char)
        else:
            can.drawString(x_centered, 167, char)
        x_centered += can.stringWidth(char, font_name, font_size) + char_spacing
    
    can.save()

    packet.seek(0)
    new_pdf = PdfReader(packet)
    if language == "it":
        existing_pdf = PdfReader(open("invito_it.pdf", "rb"))
    else:
        existing_pdf = PdfReader(open("invito_de.pdf", "rb"))
    output = PdfWriter()

    for i in range(len(existing_pdf.pages)):
        page = existing_pdf.pages[i]
        if i == 0:
            page.merge_page(new_pdf.pages[0])
        output.add_page(page)
    if language == "it":
        output_file_path = os.path.join(output_folder, f"matrimonio_Silvia_Joachim_{name}.pdf")
    else:
        output_file_path = os.path.join(output_folder, f"hochzeit_Silvia_Joachim_{name}.pdf")
    with open(output_file_path, "wb") as outputStream:
        output.write(outputStream)
    
    web.open(f"https://web.whatsapp.com/send?phone={number}")
    time.sleep(8)
    
    pyautogui.click(x=726, y=995)
    if language == "it":
        pyautogui.typewrite("Ciao, Silvia e Joachim sono felici di dare una bella notiyia!", interval=0.001)
    else:
        pyautogui.typewrite("Hallo, Silvia und Joachim freuen sich eine tolle Neuigkeit mityuteilen!", interval=0.001)
    keyboard.send('enter')
    
    pyautogui.click(x=626, y=995)
    time.sleep(1)
    
    keyboard.send("down")
    keyboard.send("enter")
    time.sleep(1)
    keyboard.send("down")
    keyboard.send("enter")
    time.sleep(1)
    keyboard.send("enter")
    time.sleep(5)   
    pyautogui.click(x=531, y=17)     
    time.sleep(1) 
    pyautogui.click(x=904, y=391)
    time.sleep(1) 