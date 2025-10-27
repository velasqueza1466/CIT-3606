# Lab 6 Python Streamlit

import streamlit as st
import pandas as pd
import numpy as np

st.title("Tuition Net Calculator")
st.write("Lab 6")
#st.snow()
# Total Aid Calculation Start
total_aid = 0
PELL_MAX = 3795
gpa = st.number_input("What is your GPA?")
fafsa = st.number_input("What is your FAFSA SAI?")
local = st.checkbox("Are you local to the area?")

if gpa >= 3.5:
    st.info("You have been awarded $20,000")

if fafsa <= 7395:
    st.info("You have been awarded a Pell Grant of 7395 - SAI")

if local:
    st.info("You have been awarded $5,000")
    st.balloons()

st.header("You have been awarded a total of $32,395")
