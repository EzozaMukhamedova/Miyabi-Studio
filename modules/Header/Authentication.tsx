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
import { UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// localStorage yordamchi funksiya
function saveUser(user) {
  localStorage.setItem("auth_user", JSON.stringify(user));
}
function getUser() {
  const user = localStorage.getItem("auth_user");
  return user ? JSON.parse(user) : null;
}
function saveUserList(users) {
  localStorage.setItem("all_users", JSON.stringify(users));
}
function getUserList() {
  const users = localStorage.getItem("all_users");
  return users ? JSON.parse(users) : [];
}

export function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Login funksiyasi
  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setErrors({ email: "", password: "", fullname: "" });
    setErrorMsg("");

    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    let isValid = true;
    const newErrors = { email: "", password: "", fullname: "" };

    if (!email) {
      newErrors.email = "Email majburiy.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "To‘g‘ri email kiriting.";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Parol majburiy.";
      isValid = false;
    }
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // localStorage tekshirish
    const users = getUserList();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      setErrorMsg("Email yoki parol noto‘g‘ri.");
      toast.error("Login muvaffaqiyatsiz. Email yoki parol noto‘g‘ri.");
      return;
    }
    saveUser(user);
    toast.success("Muvaffaqiyatli tizimga kirdingiz!");
    setOpen(false);
    router.push("/");
  }

  // Register funksiyasi
  function handleRegister(e: FormEvent) {
    e.preventDefault();
    setErrors({ email: "", password: "", fullname: "" });
    setErrorMsg("");

    const form = e.target as HTMLFormElement;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;

    let isValid = true;
    const newErrors = { fullname: "", email: "", password: "" };

    if (!fullname) {
      newErrors.fullname = "To‘liq ism majburiy.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email majburiy.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "To‘g‘ri email kiriting.";
      isValid = false;
    }
    if (!password || password.length < 6) {
      newErrors.password = "Parol 6 ta belgidan kam bo‘lmasligi kerak.";
      isValid = false;
    }
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // localStorage saqlash
    const users = getUserList();
    if (users.find((u) => u.email === email)) {
      setErrorMsg("Bu email bilan foydalanuvchi allaqachon bor.");
      toast.error("Bu email ro‘yxatdan o‘tgan.");
      return;
    }
    const user = { fullname, email, password };
    users.push(user);
    saveUserList(users);
    saveUser(user);
    toast.success("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
    setOpen(false);
    router.push("/");
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
                    ? "font-bold text-[#e47c48] "
                    : "text-gray-500"
                } cursor-pointer `}
              >
                Login
              </button>
              <span>|</span>
              <button
                onClick={() => setActiveTab("register")}
                className={`${
                  activeTab === "register"
                    ? "font-bold text-[#e47c48]"
                    : "text-gray-500"
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
                placeholder="Parol"
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
              className="w-full cursor-pointer hover:bg-[#e47c48] bg-[#e47c48] hover:opacity-80 transition-opacity"
            >
              Login
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Input
                name="fullname"
                placeholder="To‘liq ism"
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
                placeholder="Parol"
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
              className="w-full cursor-pointer hover:bg-[#e47c48] bg-[#e47c48] hover:opacity-80 transition-opacity"
            >
              Register
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
