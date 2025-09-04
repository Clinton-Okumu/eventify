import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: Implement actual authentication logic
    console.log("Login attempt:", { email, password })

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // TODO: Handle successful login and redirect
    }, 1000)
  }

  return (
    <Card className="admin-login-card w-full max-w-md mx-auto border-0 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="admin-login-title text-2xl font-bold">
          Admin Login
        </CardTitle>
        <p className="admin-login-subtitle text-sm">
          Sign in to access the admin dashboard
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="admin-login-label">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="admin-login-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="admin-login-label">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="admin-login-input"
            />
          </div>
          <Button
            type="submit"
            className="admin-login-button w-full font-semibold hover:opacity-90 transition-opacity"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}