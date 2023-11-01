# Creating your own pass engine

A pass engine is just a web page that accepts POST requests containing (fixme: document the FormData interface) and presents the interpreted request to the user.

If the user approves/rejects, it posts a RequestResult message to the opener/parent...