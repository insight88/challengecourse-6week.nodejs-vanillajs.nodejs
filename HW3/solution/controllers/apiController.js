export const apidoc = (req, res, next) => {
    res.send("API Documentation");
    next();
};
export const buy = (req, res) => res.send("API v1 Buy");
export const refund = (req, res) => res.send("API v1 Refund");
export const remove = (req, res) => res.send("API v2 Remove");
export const edit = (req, res) => res.send("API v2 Edit");
