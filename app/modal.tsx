import { cn } from "@/lib/utils"
import { useState} from "react"

const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("https://us-central1-edge-2060b.cloudfunctions.net/createDemoEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, phone})
      })
      if (!res.ok) {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error(error)
    } finally {
      onClose()
    }
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-full w-full bg-black/50 flex items-center justify-center",
        isOpen ? "visible" : "invisible"
      )}
    >
      <div className="m-auto w-96 rounded-lg bg-background p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Schedule a Demo</h2>
          <div className="relative">
            <label
              className="absolute top-0 left-2 -translate-y-1/2 text-xs font-medium bg-primary rounded-full px-2 py-0.5 text-white"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <label
              className="absolute top-0 left-2 -translate-y-1/2 text-xs font-medium bg-primary rounded-full px-2 py-0.5 text-white"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label
              className="absolute top-0 left-2 -translate-y-1/2 text-xs font-medium bg-primary rounded-full px-2 py-0.5 text-white"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-4 block w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Schedule
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal
