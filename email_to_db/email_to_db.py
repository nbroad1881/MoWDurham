import imaplib
import os
import email
import re
from dateutil.parser import parse
from dotenv import load_dotenv


load_dotenv()

mail = imaplib.IMAP4_SSL('imap.gmail.com', port=993)
mail.login(os.environ['USERNAME'], os.environ["PASSWORD"])

mail.select(mailbox='MoW', readonly=True)
type, data = mail.search(None, 'ALL')
mail_ids = data[0]
id_list = mail_ids.split()

for num in id_list:
    typ, data = mail.fetch(num,'(RFC822)')
    msg = email.message_from_bytes(data[0][1])
    date = msg['Date']
    for payload in msg.get_payload():
        if payload.get_content_type() == 'text/plain':
            plain_msg = str(payload)
        elif payload.get_content_type() == 'text/html':
            html_msg = str(payload)

print("\n\n")
print(f"Message Date: {parse(date)}")
print(plain_msg)


from dateutil.parser import parse
# There should be a message_header tuple in this form ('Date', 'Mon, 30 Dec 2013 00:07:06 -0800')
dt = 'Mon, 30 Dec 2013 00:07:06 -0800'
datetime_ = parse(dt)
regex_pattern = '\s[MTWFS][a-z]{2},\s\d\d\s[a-zA-z]{3}\s\d{4}\s\d\d:\d\d:\d\d\s.\d{4}\s\(.{3}\)'