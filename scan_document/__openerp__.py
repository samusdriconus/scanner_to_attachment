{
    'name': 'Scan Document',
    'version': '1.0',
    'author' : "Saidi Oussama"
    'description':
        """
            Scan automatically your attached documents
        """,
    'depends': ['document'],
    'auto_install': False,
    'data': [
        "views/scan_document.xml",
    ],
    'qweb':['static/src/xml/scan_document.xml'],
}
