<template lang="md"><div class="py-8 container mx-auto markdown-body">

# Email Service 1
> First mail service

Url endpoint: [Here](/api/sender1)

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
Bearer CDc3wYMfZRUzczQQiyfKsender1
```

## Test API Fail case

To test a fail case, put `sender1-fail` anywhere in the subject of the email.


## Test API Timeout case

To test a fail case, put `sender1-timeout` anywhere in the subject of the email.

</div></template>
