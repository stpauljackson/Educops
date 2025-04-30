"use client"

import type React from "react"

import { useState } from "react"
import { School, User, Users } from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type UserType = "student" | "school" | null

type UserTypeModalProps = {
  isOpen: boolean
  onClose: (userType: UserType) => void
}

export function UserTypeModal({ isOpen, onClose }: UserTypeModalProps) {
  const [selectedType, setSelectedType] = useState<UserType>(null)

  const handleSelection = (type: UserType) => {
    setSelectedType(type)
  }

  const handleContinue = () => {
    if (selectedType) {
      onClose(selectedType)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose(selectedType || null)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Welcome to EduCops</DialogTitle>
          <DialogDescription className="text-center">
            Please select who you are to help us personalize your experience
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <UserTypeOption
              icon={<User className="h-10 w-10" />}
              title="Student"
              isSelected={selectedType === "student"}
              onClick={() => handleSelection("student")}
            />
            <UserTypeOption
              icon={<School className="h-10 w-10" />}
              title="School"
              isSelected={selectedType === "school"}
              onClick={() => handleSelection("school")}
            />
          </div>
          <Button onClick={handleContinue} disabled={!selectedType} className="mt-2">
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

type UserTypeOptionProps = {
  icon: React.ReactNode
  title: string
  isSelected: boolean
  onClick: () => void
}

function UserTypeOption({ icon, title, isSelected, onClick }: UserTypeOptionProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-all",
        isSelected ? "border-primary bg-primary/10" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
      )}
      onClick={onClick}
    >
      <div className={cn("mb-2 text-gray-600", isSelected && "text-primary")}>{icon}</div>
      <span className={cn("font-medium", isSelected && "text-primary")}>{title}</span>
    </button>
  )
}

