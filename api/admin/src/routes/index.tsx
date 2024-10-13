import { createFileRoute, redirect } from '@tanstack/react-router'
import '../assets/style/routes/index.css'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Header3, Paragraph } from '@/components/typography'
import { Fingerprint } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '@/hooks/use-auth'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
     beforeLoad: async ({ context }) => {
        const { isAuthenticated } = context.authentication;
        if (isAuthenticated()) {
            throw redirect({ to: '/user' });
        }
    },
    component: () => <Login />,
})

const formSchema = z.object({
    adminEmail: z.string().min(2, {
        message: 'Not a valid email address',
    }),
    pin: z.string().min(6, {
        message: 'Not a valid pin',
    }),
})

function Login() {
    const { adminLogin } = useAuth()
    const { toast } = useToast()
    const navigate = useNavigate()


    const { mutateAsync: signAdminMutation, isPending } = useMutation({
        mutationFn: adminLogin,
        onSuccess: () => {
            navigate({ to: "/user" })
        },
        onError: (err) => {
            console.error(err)
            toast({
                variant: "destructive",
                title: "Login Error",
                description: err.response.data,
            })
        }
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            adminEmail: '',
            pin: '',
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        await signAdminMutation(values)
    }



    return (
        <section className="auth">
            <div className="authWrap">
                <div className="authIcon">
                    <Fingerprint size={40} />
                </div>
                <div className="authInfo">
                    <Header3>Welcome Back</Header3>
                    <Paragraph>Let's login into your account.</Paragraph>
                </div>
                <div className="authForm">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="adminEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Admin Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>AdminPin</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your pin" {...field} type='password' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="formAction">
                                <Button type="submit" disabled={isPending}>
                                    {
                                        isPending? "Signing Admin..." : "Login"
                                    }
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}
