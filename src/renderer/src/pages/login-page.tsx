import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <div className="h-full w-full">
      <Button onClick={window.api.googleSignIn}>Entrar</Button>
    </div>
  )
}
