const seedUserItems = [
  {
    item_name: "Carrot",
    description: "DESCRIPTION",
    price: 5,
    quantity: 0,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1ZAUk1lsps6z2IiR-GFsLM50k_pxBoLSg",
    item_type: "Food",
    hunger: 5,
  },
  {
    item_name: "Carrot Seeds",
    description: "DESCRIPTION",
    price: 2,
    quantity: 6,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1GhZxrbeBTIzHWrur8DNFFQshEblXo3N2",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=11-l9tE5z5iwhdTWulbD9bLpAiJmTJxqV",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1ZAUk1lsps6z2IiR-GFsLM50k_pxBoLSg",
    reference: "Carrot",
  },
  {
    item_name: "Pumpkin",
    description: "DESCRIPTION",
    price: 10,
    quantity: 0,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=19uXQYIn8RiGOenwKRBK5MQwS_5oh2sbQ",
    item_type: "Food",
    hunger: 10,
  },
  {
    item_name: "Pumpkin Seeds",
    description: "DESCRIPTION",
    price: 2,
    quantity: 10,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1dkahkeou4RA802ccliXYwCdvihL4BBCH",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=11-l9tE5z5iwhdTWulbD9bLpAiJmTJxqV",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=19uXQYIn8RiGOenwKRBK5MQwS_5oh2sbQ",
    reference: "Pumpkin",
  },
  {
    item_name: "Wheat",
    description: "DESCRIPTION",
    price: 3,
    quantity: 10,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1O5tGyeWr-CRBJs2GVLhLn4ieqxssyZ65",
    item_type: "Food",
    hunger: 3,
  },
  {
    item_name: "Wheat Kernels",
    description: "DESCRIPTION",
    price: 2,
    quantity: 6,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=193hA1YeCzo9fp9okb3vGi7Uxa-8Qf6nF",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1KCDV1tY-u_zeON20fsvocVVxIG-pmbMk",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1O5tGyeWr-CRBJs2GVLhLn4ieqxssyZ65",
    reference: "Wheat",
  },
  {
    item_name: "Corn",
    description: "DESCRIPTION",
    price: 3,
    quantity: 1,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1KpGfLBS4-aKL_iQTvjTOTlIisLk9KUj9",
    item_type: "Food",
    hunger: 4,
  },
  {
    item_name: "Corn Kernels",
    description: "DESCRIPTION",
    price: 2,
    quantity: 4,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1iolo-kvHBZGu1ixvD0xO9YiWbo-ZjQsd",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1b1v24MNOLlNSlXiYHsOApJgLR9xw9Dox",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1KpGfLBS4-aKL_iQTvjTOTlIisLk9KUj9",
    reference: "Corn",
  },
  {
    item_name: "Mango Sapling",
    description: "DESCRIPTION",
    price: 3,
    quantity: 5,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1Xppi8w8zxQ7e89SMVf0dsrJRB4uosW7K",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1Xppi8w8zxQ7e89SMVf0dsrJRB4uosW7K",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1ykGuMa9pZyomQDj_PHOCYF5UKjVlWR6Q",
    reference: "Mango",
    hunger: 6,
  },
  {
    item_name: "Cherry Sapling",
    description: "DESCRIPTION",
    price: 5,
    quantity: 5,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1Ib1oI9a4nZ74xrRc4xOa22UEbt6lPpZC",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1Ib1oI9a4nZ74xrRc4xOa22UEbt6lPpZC",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1dn1CA8g_z0CfmeoA38QrtZDabMsa3SLT",
    reference: "Cherry",
    hunger: 2,
  },
  {
    item_name: "Apple Sapling",
    description: "DESCRIPTION",
    price: 2,
    quantity: 5,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1QUsprbfPwlmPVZdOl-yv26SBpSwGeqiy",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1QUsprbfPwlmPVZdOl-yv26SBpSwGeqiy",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1fieclKRtB9eLnCgcC-4KwyUGbvexqhyf",
    reference: "Apple",
    hunger: 2,
  },
  {
    item_name: "Rice",
    description: "DESCRIPTION",
    price: 5,
    quantity: 1,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1Lk6-e_x_OAbkeJUjAbC6GnbTqLxot5Lc",
    item_type: "Food",
    hunger: 3,
  },
  {
    item_name: "Rice Seeds",
    description: "DESCRIPTION",
    price: 2,
    quantity: 7,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1CQz01xDbP40NHi1t9n-wOf5NL1fi3yzw",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1xpk1Bw85G6K2_UjupIhkNfWuApOCnQLN",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1Lk6-e_x_OAbkeJUjAbC6GnbTqLxot5Lc",
    reference: "Rice",
  },
  {
    item_name: "Cooking Oil",
    description: "DESCRIPTION",
    price: 3,
    quantity: 1,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=1lZUuF6AZawcljJJkVMggF285aqVe9CD2",
    item_type: "Cooking",
  },
  {
    item_name: "Solar Panel",
    description: "DESCRIPTION",
    price: 50,
    quantity: 1,
    username: "Hannah",
    item_img:
      "https://drive.google.com/uc?export=view&id=14BzZdgxxlAcCwAEvlD0hvkkesYZwNaLB",
    item_type: "Home",
  },
  {
    item_name: "Carrot",
    description: "DESCRIPTION",
    price: 5,
    quantity: 0,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1ZAUk1lsps6z2IiR-GFsLM50k_pxBoLSg",
    item_type: "Food",
    hunger: 5,
  },
  {
    item_name: "Carrot Seeds",
    description: "DESCRIPTION",
    price: 2,
    quantity: 6,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1GhZxrbeBTIzHWrur8DNFFQshEblXo3N2",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=11-l9tE5z5iwhdTWulbD9bLpAiJmTJxqV",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1ZAUk1lsps6z2IiR-GFsLM50k_pxBoLSg",
    reference: "Carrot",
  },
  {
    item_name: "Pumpkin",
    description: "DESCRIPTION",
    price: 10,
    quantity: 0,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=19uXQYIn8RiGOenwKRBK5MQwS_5oh2sbQ",
    item_type: "Food",
    hunger: 10,
  },
  {
    item_name: "Pumpkin Seeds",
    description: "DESCRIPTION",
    price: 2,
    quantity: 10,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1dkahkeou4RA802ccliXYwCdvihL4BBCH",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=11-l9tE5z5iwhdTWulbD9bLpAiJmTJxqV",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=19uXQYIn8RiGOenwKRBK5MQwS_5oh2sbQ",
    reference: "Pumpkin",
  },
  {
    item_name: "Wheat",
    description: "DESCRIPTION",
    price: 3,
    quantity: 10,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1O5tGyeWr-CRBJs2GVLhLn4ieqxssyZ65",
    item_type: "Food",
    hunger: 3,
  },
  {
    item_name: "Wheat Kernels",
    description: "DESCRIPTION",
    price: 2,
    quantity: 6,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=193hA1YeCzo9fp9okb3vGi7Uxa-8Qf6nF",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1KCDV1tY-u_zeON20fsvocVVxIG-pmbMk",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1O5tGyeWr-CRBJs2GVLhLn4ieqxssyZ65",
    reference: "Wheat",
  },
  {
    item_name: "Corn",
    description: "DESCRIPTION",
    price: 3,
    quantity: 1,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1KpGfLBS4-aKL_iQTvjTOTlIisLk9KUj9",
    item_type: "Food",
    hunger: 4,
  },
  {
    item_name: "Corn Kernels",
    description: "DESCRIPTION",
    price: 2,
    quantity: 4,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1iolo-kvHBZGu1ixvD0xO9YiWbo-ZjQsd",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1b1v24MNOLlNSlXiYHsOApJgLR9xw9Dox",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1KpGfLBS4-aKL_iQTvjTOTlIisLk9KUj9",
    reference: "Corn",
  },
  {
    item_name: "Mango Sapling",
    description: "DESCRIPTION",
    price: 3,
    quantity: 5,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1Xppi8w8zxQ7e89SMVf0dsrJRB4uosW7K",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1Xppi8w8zxQ7e89SMVf0dsrJRB4uosW7K",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1ykGuMa9pZyomQDj_PHOCYF5UKjVlWR6Q",
    reference: "Mango",
    hunger: 6,
  },
  {
    item_name: "Cherry Sapling",
    description: "DESCRIPTION",
    price: 5,
    quantity: 5,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1Ib1oI9a4nZ74xrRc4xOa22UEbt6lPpZC",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1Ib1oI9a4nZ74xrRc4xOa22UEbt6lPpZC",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1dn1CA8g_z0CfmeoA38QrtZDabMsa3SLT",
    reference: "Cherry",
    hunger: 2,
  },
  {
    item_name: "Apple Sapling",
    description: "DESCRIPTION",
    price: 2,
    quantity: 5,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1QUsprbfPwlmPVZdOl-yv26SBpSwGeqiy",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1QUsprbfPwlmPVZdOl-yv26SBpSwGeqiy",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1fieclKRtB9eLnCgcC-4KwyUGbvexqhyf",
    reference: "Apple",
    hunger: 2,
  },
  {
    item_name: "Rice",
    description: "DESCRIPTION",
    price: 5,
    quantity: 1,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1Lk6-e_x_OAbkeJUjAbC6GnbTqLxot5Lc",
    item_type: "Food",
    hunger: 3,
  },
  {
    item_name: "Rice Seeds",
    description: "DESCRIPTION",
    price: 2,
    quantity: 7,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1CQz01xDbP40NHi1t9n-wOf5NL1fi3yzw",
    item_type: "Seed",
    stage_1_img:
      "https://drive.google.com/uc?export=view&id=1DmehENOmy_dAz1P9M0bLz6_30gamfAWx",
    stage_2_img:
      "https://drive.google.com/uc?export=view&id=1xpk1Bw85G6K2_UjupIhkNfWuApOCnQLN",
    stage_3_img:
      "https://drive.google.com/uc?export=view&id=1Lk6-e_x_OAbkeJUjAbC6GnbTqLxot5Lc",
    reference: "Rice",
  },
  {
    item_name: "Cooking Oil",
    description: "DESCRIPTION",
    price: 3,
    quantity: 1,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=1lZUuF6AZawcljJJkVMggF285aqVe9CD2",
    item_type: "Cooking",
  },
  {
    item_name: "Solar Panel",
    description: "DESCRIPTION",
    price: 50,
    quantity: 1,
    username: "Lucy",
    item_img:
      "https://drive.google.com/uc?export=view&id=14BzZdgxxlAcCwAEvlD0hvkkesYZwNaLB",
    item_type: "Home",
  },
];

module.exports = seedUserItems;
