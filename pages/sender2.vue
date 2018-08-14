<template lang="md"><div class="py-8 container mx-auto markdown-body">

# Email Service 2
> Sender Mail service

Url endpoint: [Here](/api/sender2)

Method: `POST`

## Payload

```clike
{
    from: Email,
    to: [Email],
    cc: [Email] // (optional),
    bcc: [Email] // (optional),
    subject: String,
    text: String
}
```

| Key | Type | Required? |
| --- | --- | --- |
| `from` | Email | Yes |
| `to` | [Email] | Yes |
| `cc` | [Email] | No |
| `bcc` | [Email] | No |
| `subject` | String | Yes |
| `text` | String | Yes |

## Security

Need an `Authorization` header with every request.

```
Bearer CDc3wYMfZRUzczQQiyfKsender2
```

## Test API Fail case

To test a fail case, put `sender2-fail` anywhere in the subject of the email.


## Test API Timeout case

To test a fail case, put `sender2-timeout` anywhere in the subject of the email.

</div></template>
