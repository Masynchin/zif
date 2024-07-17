FROM python:3.9.18-alpine3.18

COPY ./requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD [ "uvicorn", "--factory", "main:create_app" ]
