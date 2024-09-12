import initKnex from "knex";
import configuration from "../knexfile.js"

const knex = initKnex(configuration);

const getWarehouses = async (_req, res) => {
    try {
        const data = await knex
        .select(
            "id",
            "warehouse_name",
            "address",
            "city"
        )
        .from("warehouses")
        res.json(data)
    } catch (error) {
        console.error
        res.status(500).json(`${error}`)
    }
}

export { getWarehouses }