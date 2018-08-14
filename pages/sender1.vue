<template lang="md">

# Email Service 1
> First mail service

## API Endpoint

| Detail |  |
|--- | --- |
| URL | https://sm-email-api.herokuapp.com/api/sender1 |
| Methods Supported | `POST` |
| Description | This is an endpoint that sends an email using sender1 |

## Payload

```js
{
    "from": "test@test.com",
    "to": ["persona@test.com"],
    "cc": ["personb@test.com"], // (optional)
    "bcc": ["personc@test.com"], // (optional)
    "subject": "Some sort of subject",
    "text": "The text of the payload"
}
```

## Security

Need an `Authorization` header with every request.

```
Bearer CDc3wYMfZRUzczQQiyfK
```


## Test API Fail case

To test a fail case, put `sender1-fail` anywhere in the subject of the email.

## Test API Timeout case

To test a fail case, put `sender1-timeout` anywhere in the subject of the email.

</template>
