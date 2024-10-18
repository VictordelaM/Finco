import mongoose, { Schema } from "mongoose";

const defaultExpenseCategories = [
    {categoryName:'Food',color:'red', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913283/food_srwsto.png'},
    {categoryName:'Technology',color:'blue', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913288/tech_pzvvdn.png'},
    {categoryName:'Clothing',color:'green', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913295/clothes_r99noc.png'},
    {categoryName:'Rental',color:'violet', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913301/miete_uir2sk.png'},
    {categoryName:'Insurance',color:'yellow', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913306/versicherung_kxah4r.png'},
    {categoryName:'Leisure',color:'orange', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913312/drachen_jgjonm.png'},
]

const defaultIncomeCategories = [
    {categoryName:'Salary',color:'red', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913257/salary_iilics.png'},
    {categoryName:'Bonus',color:'blue', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913231/Bonus_i1wx0s.png'},
    {categoryName:'Pocket money',color:'green', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913262/pocketMoney_fuelw5.png'},
    {categoryName:'Cashback',color:'violet', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913268/cashback_ezdevd.png'},
    {categoryName:'Part-time job',color:'yellow', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913277/part-time_hk4xeu.png'},
    {categoryName:'Sales',color:'orange', imgUrl:'https://res.cloudinary.com/dvuefu0mx/image/upload/v1714913226/sales_xqu81q.png'},
]

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    passwordHash:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        required:true,
    },
    emailVerified:{
        type: Boolean,
        default: false,
    },
    verificationCode:{
        type:String,
        default:""
    },
    pictureUrl:{
        type: String,
    },
    transactions:[{
        id:{
            type:String
        },
        type:{
            type:String
        },
        category:{
            type:String
        },
        amount:{
            type:Number
        },
        description:{
            type:String
        },
        date:{
            // type:String
            type:String
        },
    }],
    expenseCategories:{
        type:[{
            categoryName:{
                type:String,
            },
            color:{
                type:String,
                default:"green",
            },
            imgUrl:{
                type:String,
                default: 'www.blödertest.de'
            }
        }],
        default:defaultExpenseCategories
},
    incomeCategories:{
        type:[{
            categoryName:{
                type:String,
            },
            color:{
                type:String,
                default:"green",
            },
            imgUrl:{
                type:String,
                default: 'www.blödertest.de'
            }
        }],
        default:defaultIncomeCategories
}
})

export const User = mongoose.model("User", userSchema, "Users");



// categories:

// income :
// salary
// dividenden
// mieteinnahmen 
// sidehusstle
// pension
// sugardaddy/mommy money
// illegal money
// zuschüsse




// expense:
// food 
// electronics
// clothes
// insurance
// rent
// car
// sluts
// drugs and soft drugs
// lifestyle
// style
// vacation/holiday

