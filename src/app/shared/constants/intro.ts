'This is a folder which contain files that have constants like string constants, regex patterns, etc.' 
'This file is manually created by developer.'

'Example :-'

export const NEW_RECIPE = "Click here to create a new Recipe in this directory";
export const CRED_CARD_REGEX = /^(?:4[0-9]{15}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

export const VARIABLES = {
    "gmail": {
      "labels": "labels in which message received",
      "snippet": "brief of body",
      "deliver_to": "to whom it deliver, mainly the receiver of above account",
      "received_at": "when it is received at gmail server",
      "from": "who sent the mail",
      "to": "all the email in to field",
      "time": "at what time it is received by user",
      "subject": "subject of mail",
      // "body_plain": "body in plain text format(usefull for message)",
      // "body_html": "body in html format(usefull for email)"
    },
    "sms": {
      "from": "from which number sms is sent",
      "to": "to which number sms is sent",
      "body": "body of message",
      "time": "at what time it is sent"
    }
  };
