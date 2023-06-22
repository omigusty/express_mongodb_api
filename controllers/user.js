const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  //daftar user baru
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      //enskripsi password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User berhasil terdaftar" });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat registrasi" });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        res.status(404).json({ message: "User tidak ditemukan!" });
        return;
      }
      //membandingkan password yang diinput dengan password yang tersimpan
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.status(401).json({ message: "Password salah" });
        return;
      }
      //membuat token jwt untuk autentikasi
      const token = jwt.sign({ userId: user._id }, "rahasia", {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat proses login" });
    }
  },
};
