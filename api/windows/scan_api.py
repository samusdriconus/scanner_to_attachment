from flask import Flask
from flask_cors import CORS, cross_origin
import time
import os

app = Flask(__name__)
CORS(app)

@app.route('/odoo_scan', methods=['GET'])
def scan():
	pdf_path = "scan.pdf"
	os.system('NAPS2.Console.exe -o "%s"'%pdf_path)
	f=open(pdf_path,"rb")
	value=f.read()
	f.close()
	return value
 



if __name__=="__main__":
	app.run(host="0.0.0.0",debug=True)

