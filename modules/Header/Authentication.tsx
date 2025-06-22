"use client";
import { FormEvent, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Login } from "@/service/AuthLogin";
import { Register } from "@/service/AuthRegister";
import { useRouter } from "next/navigation";
import { UserIcon } from "lucide-react";
import { toast } from "react-hot-toast";

export function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { mutate: loginMutation } = Login();
  const { mutate: registerMutation } = Register();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    const data = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    let isValid = true;
    // const newErrors = { email: "", password: "" };
    const newErrors = { email: "", password: "", fullname: "" };

    if (!data.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    loginMutation(data, {
      onSuccess: () => {
        toast.success("Muvaffaqiyatli tizimga kirdingiz!");
        setOpen(false);
        router.push("/");
      },
      onError: (err) => {
        console.error("Login failed", err);
        toast.error("Login muvaffaqiyatsiz. Email yoki parol noto‘g‘ri.");
      },
    });
  }

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    const data = {
      fullname: (e.target as HTMLFormElement).fullname.value,
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    let isValid = true;
    const newErrors = { fullname: "", email: "", password: "" };

    if (!data.fullname) {
      newErrors.fullname = "Full name is required.";
      isValid = false;
    }

    if (!data.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    registerMutation(data, {
      onSuccess: () => {
        toast.success("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
        setOpen(false);
        router.push("/");
      },
      onError: (err) => {
        console.error("Register failed", err);
        toast.error("Ro‘yxatdan o‘tishda xatolik yuz berdi.");
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-transparent border-none cursor-pointer"
          asChild
          variant="outline"
        >
          <span className="flex items-center gap-2 cursor-pointer">
            <UserIcon />
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-center gap-4 cursor-pointer">
              <button
                onClick={() => setActiveTab("login")}
                className={`${
                  activeTab === "login"
                    ? "font-bold text-[#0F4A97] cursor-pointer"
                    : "text-gray-500 cursor-pointer"
                } cursor-pointer`}
              >
                Login
              </button>
              <span>|</span>
              <button
                onClick={() => setActiveTab("register")}
                className={`${
                  activeTab === "register"
                    ? "font-bold text-[#0F4A97] cursor-pointer"
                    : "text-gray-500 cursor-pointer"
                } cursor-pointer`}
              >
                Register
              </button>
            </div>
          </DialogTitle>
        </DialogHeader>

        {activeTab === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                name="email"
                placeholder="Email"
                required
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email}</span>
              )}
            </div>

            <div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                required
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password}</span>
              )}
            </div>

            {errorMsg && (
              <span className="text-sm text-red-500">{errorMsg}</span>
            )}

            <Button
              type="submit"
              className="w-full cursor-pointer bg-[#0F4A97] hover:opacity-80 transition-opacity"
            >
              Login
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Input
                name="fullname"
                placeholder="Full Name"
                required
                className={errors.fullname ? "border-red-500" : ""}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">{errors.fullname}</span>
              )}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email}</span>
              )}
            </div>

            <div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                minLength={6}
                required
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password}</span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer bg-[#0F4A97] hover:opacity-80 transition-opacity"
            >
              Register
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
