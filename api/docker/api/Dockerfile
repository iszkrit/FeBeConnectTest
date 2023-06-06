FROM golang:1.18
WORKDIR /api

COPY go.mod go.sum main.go ./
RUN go mod download


CMD ["go", "run", "main.go"]