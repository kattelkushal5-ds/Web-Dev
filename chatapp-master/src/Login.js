import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import {auth,provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state,dispatch] = useStateValue();

    const signIn =()=>{
        auth
            .signInWithPopup(provider)
            .then(response=>dispatch({
                type:actionTypes.SET_USER,
                user:response.user,
            }))
            .catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebook" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAqFBMVEX///8BePYAdPb///0AdvYAb/YAcfXn8vpfoPQAavEAdff///tvqPYqiPR5sfTC2vWuzfT4/P7b6/wAavUAePIAcfgAcvGtyvQAbvGDsvXk8fuRu/GawvNgofFZnfQIfPLQ4/UYgPAAZfW/1/Y4jPNQlvGJtvKnyvHK3vdwqPOrzPLZ6vXN4/JCkPPv9/sAZPGIue+z1PIWgvZnp/HH4PTt+PaUvvA/kvB7oYx4AAAMmUlEQVR4nO1baXfiOg+GODYkLmsSlrIlE7ZA4Q5tKf//n91s2LLjtMx5Z3nnHj0f5kyNkeTHsizLptFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCUQUp/iF/0oA/o/zHtfKXwzZpL9rd7bx//BNG89Zx35+9/AHN12PY223Jo4PmL4uJEzArA2Ne+5faVgGZL07RyHEoDZzxb9V8XizXK8dLNbN/HnQw8nzzrKaE9fSLbdT1L5ntFqpZ/7dqbnmWaxeanQfJihmkKiVr8Ytt1EDaQv/vJouJQT9IVkibTSTrMbIGKxvJepSsWdBEsh4ki690rpCsWoSOZMm2GJ1Q+ttTh7+GrA+wE06S+Pic4vx7k9K/h6xEkjXa/6Hjxl9D1s0VoSr59dYZ8feQtRaJQ9D/Q4fov4esjiCL9n69dUb8RWSJZRggWV8ByUKyHgOS9QP4+WSRxoOVV8KL0jAxVqdJ2cgrJck6ssinRW4i9D1iHTEO41GyzsMcz5FMHXbDEi1pbvjRXq/81TqJc3VkKNCCwtP/83DeXXaiVRSdFtt+SxsDP8fbp1snijqnt49QZUEni5DjR7uzWnXa230dX5m89jryU9Pa2/hcS1GD7D+SU9avs0nGQ02cmSwwyOEwbxl/ozmaEqxood8+7hbtImpZGZu2RUcznrY0yz7UW3Boe9xmlBVlR9u1WOBEs5b8+DpeO6mk7OPsU2o9hfVk8UPHY5lW27KoPxsYSBik8lhhWd7LOx24oVuDvC8mmVnN0ixntVXm2EzW5dt9kPTbPJc7rlRmBIK40PQSUVjqop1Wg4gahfUktZJLSqomxGZ0d2fyw2ZazczyltJqlazzSdEa+Bfdt/jcZ64qz6WrcZWu8FQxi9EEnHyNZBFf6Hc3ReMnZNH3fH33qT5Cv8VfJVl348h5o/fMMYmL27XWWi/F5t8fXYQASNbV18dHvys0kLNRnk03Z5UuvnVcQ8fA7wm2jGQlsnFSro5PyHKOmU2xU/nA7RjIIs8rfXhlj2IBHSujL0F3dwmArMupyjv9DrmqlcdWcIkRvjRxmsJ27i5vIouAKjubNb4mK4uXrSpX6axsO/f/CrLOvsmtshJi7p+tkWl6Cz29ClnNjYkJL5YctJpmdSlc/wrIatcP0DvUkkWIPP/ZESdfk5VtIifzGP37f+5k8U7NRAeX/OMIynEtSxE7qJBVw4SI8jyq5Sq16SRda1bjVzloeY1sIGs2kb3Cu7BPyGqmH19UXbZbudUoydJL+K5bdnXyAX5n4CvN21uyjICbTytkmdWVHTN5qjpb63dfN42jZr/aMY0nNWQ9yxaWiBg4pnYOTWQKa51O4FrZkUbrzWmk7mgFWeQ6Uhrp6rbcrEcTZrubfI0Cm635NU98Yuk+o7OJrGDS2ZxWFPrgqMykzh7U5ryu1yvHMvQjynKmo/UpmjDYMiZGsjj43komLf3XTg5fSihbokUaReEgVzHP0uU4Uq+tc7JmwAR3sj3mPclwvv520PyOhfc1chVRLhhXyWL+eJCm5jy8BXJ2WDE4MgXqnGSY9XvuAgLZtlByhG2dmKQ498HOYL9yI1kXGalpDHIjTnKAetZ72ZSOdyuluOu7N/IN8K2SLBBCrNNZnmRIeFY/pjupu3efCvdGdLKs07XsSLqSafeUG0HA1LIeKUNyCL6+Kvp1ZRN7E/bf5KiK4p1OFh8Je62l4ehgPBsSsAotucXA6FqQNZTh0F5Xs8KhdNAV+FTOkD/QyLJBPw42GZZz3wOjPYjB8L1UQ981Ut2NFAjmzk5MZL3Jv0emI5SRrDMIczPQGYT9nCwyl5M/OVaFj4Ucawqayfb+tclQI4teQL8Xqa4wbis6lq5WsrUQZrCtNkkTcOoisZzbfFI0skCKRecGrsxkhWZl6dFQI2thyb+rsom8OlJr1v27/KCvkQUdEHhgujs0lHwmgKQ23gUJ7i0zayfIK/YZYb90LadVIYtLdW7HeH43ktUXQuy1Uh9YSuvzZSiXK40rohsNOTjnGbaLyWBzlSx44kzHNhUf5MtGnkybzhXK42LZ2X5mlvweUx58gViWz55CFge7kWNYJnVkzaT1iUKxDPw5WfL005yY1jiI78dzS+AsIny+auBxR/V+4YHFkbYlPfBVDZDykJQfPzZiUFR9SrhjiiZIFnmWa5RNjUUMM1lyAthMIetDJWsgxDdtQykFvqOgECCUEZUs9eWfjNx5GnkUw7FPymjIUnpMFgWlw2suEgvnsbcqWZTf5FhezVyZyXqqs14G9IIsmZL6BrIG1UcnGnSyLLWsLDfb3H4ZSu2bSpaUkG2HJBIK1OXf6En7E5WsEdi8aN3V/BdkBar19WQ1fwpZ2tyAw0cW+fcylGpkLZRYxCVZtJasJ5WspnympoWen0YWUPZLyFK3yX2tZwGy9umfMpTWe5ZOlkzNlDTnR8iij3rWz1mG2txIz8qXISDrpEy+RhbYWB5ehpayDH+ErLqttzGvDfAmssj/SpZMLu0swIMQdlIVgZj1ouRntcuQdVWyHL6RM9P5kQAvj8fabqh5FtjuTKkDPDk6RvzT1ZahSpYMUnnG3qobDpG5QpZsgj/pUBHYl2TNNLLgH8HsB1IHWeyy1FeAU5A+aklpaBAu0x96HpjRUHdDJc8iY/WAMJBxxVZHE4kPRplEkHuqubL0gjy+qBn8B1iIKsefkrWX+ZmScvCTmsFDn5gZtpBE2dHrAKTYbeW4A05T+ZmvLn+S2WrhciBabBVNwOXCCll87Uoxxl+nGMlqwdoq+FZLP0jLmbJXBs+dg+X8EFnNETzGAE9i2VkQnDUZJIFIPXa27cNLhxW8xACkjkiFLHhwnzx+kCav8ki5BCSAEkaxDEFxJDW/ci8PPn6tvx2HZDF4kwNqGvmuRmIZ8EdgQ4GkHrQGuJ1zuTyLSppGFulWb8G+Jou/gaLJQTTDwnxB1hVEEe9QEU5kgFdqL/VkwfV6lKU4O8qnDOR11kYWGpeA7KJQLddv05ajvoDKU+45OlkcZKabR4t/jRjQ4pX3e3wOLwHKSmkCx9m9Xx0R/r48akaPQlU7v+6mBrLSBVBI4e/gqodNiU5CsLwWdl1vFQpJT5pq+++FYg4CeElqpazcA2XlQ5UtM1kggUq/Fs3ifTyLlBuL8nZnCAkMRkl8bD2H4yef0jxIgXVo02krnbyibD14n50cSomBrGbwuo33vfkGSp4UTJMXUFu3rOSy3/efJuDbTplOghw+bTyN38P4+wpcDJUnmurtzhPI6avJUM2To6liP2OUBpAqeRW2hB2zXx1QJ7BYVgjLi9qgMuxbtLNMptvp0yaiNHutUC45/XbHTtWxQLlvvJeslVsb20qtCpRbFLF24NJougELmAXtZ60ass7g1NOubFlmsshZueKS9lXIutZdZnp57nxULrZt17KYJX7jV25pMHWokSWeJ7T0JyYKJuI3uHxjHkCpeHaXJprul6x9kAhUwmzdY7a5iQS7U33r0PcMHZv3EMo/uxlOvU8ly14bD0isLS8nDjXqMng7aX/dq4Jc3v0YbnrrAHzX51rYqiOLmF4d0JcqWdxIqzi+keQTtibaJau7vBieWLg+vBn6MD3CyOEpCeizX/fIgq2ln4pGQRZoY/q9Qu0zSX6qXPB7Hxy8z7qHkcbBMpo1KeIC79azVSRBgKwNqfa2mupheDcxqnPpXPWD54iZ+jWpvBwzPTmCN1a0p4qsf1PKF5rHO1tiep+Vbok3arDfK5JgQmK/5l0FK3xBIYt3Vc+x6VpLD8lw7VSWmEs7oeYGDZ5Qq9KRjebScOP7LHDJo+T/KaLAKuFpZBF+icAPzZkf8wb3WdmbKs8kexsvULdF2pwN7nM1mK10s7N9009eivvjJS2FBifS4PFKvo2zAnuuB450OJe1A9/+uZYX9avdGnz4FMBpzB57TmFC0HLug7fAr++PnmilibIjbrt3JKGujvDem+9kNwxOmqvwrCYjend3ihje2i1WnlPcRzhOpxsrJ2K+73YchwYsRRBQx/Pbs1CksHMh9CM72fH+0skleWxzMHCQqTt+bEalNo/etseaAhS/XoRZjhMlF7Xqdk7k6MGXpD3dt7q3vUaQc7jf7+uM0foeX/a93j5s1Qxw39/N5/Nd/P6luLRvrRyh7Vpq+1pY2Ov1wsfG8H+IB16u/0xtv1cdAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQ/zn8C82N4jIsCFMoAAAAAElFTkSuQmCC" alt="faceboo logo" />
                <Button type= "submit" onClick={signIn}>Sign In</Button>

            </div>

        </div>
    )
}

export default Login
