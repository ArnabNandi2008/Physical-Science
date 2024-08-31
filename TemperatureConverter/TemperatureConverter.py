# module importing

import tkinter as tk

def exchangeVal() :
    fpvn = fpv.get()
    tpvn = tpv.get()
    fpv.set(tpvn)
    tpv.set(fpvn)

def Convert() :
    o = 0
    fdvn = fdv.get()
    a = fpv.get()
    a = float(a)
    tdvn = tdv.get()
    fn = fdvn[0]+tdvn[0]
    if fn[0]==fn[1] :
        o = a
    else :
        if fn=="CF" :
            o = (((9*a)+160)/5)
        elif fn=="CK" :
            o = a+273
        elif fn=="FC" :
            o = (((5*a)-160) /9)
        elif fn=="KC" :
            o = a-273
        elif fn=="FK" :
            o = (((5*a)+2297)/9)
        else :
            o = (((9*a)-2297)/5)
    tpv.set(str(o))

bgc = "cyan" # back ground color
root = tk.Tk()
root.title("Temperature Converter")
root.geometry("430x175")
root.configure(bg=bgc)
options_list = ["Celcius", "Fahrenheit", "Kelvin"] # option list for dropdown
l = tk.Label(master=root, text="Temperature Converter", font="Calibri 32 underline bold", bg=bgc)
l.grid(columnspan=4)

# from

fl = tk.Label(master=root, text="From", font="Calibri", bg=bgc) # label
fl.grid(row=1,column=0)
fpv = tk.StringVar(master=root) # string variable for prompt
fp = tk.Entry(master=root,textvariable=fpv)
fp.grid(row=1,column=2)
fdv = tk.StringVar(root) # string variable for dropdown
fdv.set("Choose")
fd = tk.OptionMenu(root, fdv,*options_list) # dropdown
fd.grid(row=1,column=3)

# exchange button

sb = tk.Button(master=root, activebackground=bgc, text="Exchange",command=exchangeVal)
sb.grid(row=2,column=2)

# to

tl = tk.Label(master=root, text="To", font="Calibri", bg=bgc) # label
tl.grid(row=3,column=0)
tpv = tk.StringVar(master=root) # string variable for prompt
tp = tk.Entry(master=root,textvariable=tpv) # prompt
tp.grid(row=3,column=2)
tdv = tk.StringVar(root) # string variable for dropdown
tdv.set("Choose")
td = tk.OptionMenu(root, tdv,*options_list) # dropdown
td.grid(row=3,column=3)

# submit button

sb = tk.Button(master=root, activebackground=bgc, text="Submit",command=Convert)
sb.grid(row=4,column=2)

# ad

al = tk.Label(master=root, activebackground=bgc, text="")

root.mainloop()