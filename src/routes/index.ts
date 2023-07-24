import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
    return res.send({ message: "Its goin well" });
});

export { router };