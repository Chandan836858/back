const CONSTANT = require("../constant/Constant");
const ImgModel = require("../model/Imgmodel");

exports.addImg = async (request,response)=>{
    try{
        const reqdata = request.body;
        const img = request.imagePath;
        console.log(img); 
        const data={
            name:reqdata.name,
            description:reqdata.description,
            image:img
        }
        const resdb = await ImgModel.create(data)
        if(resdb){
            response.status(201).json({
                status:"success",
                message:"upload img successful",
                data:resdb
            })
        }
    }
    catch(err){
        response.status(500).json({
            status:"failed",
            message:"add img failed",
            error:err.message
        })
    }
}


exports.getImage=async (request,response)=>{
    try{
        let dbRes=await ImgModel.find()
        dbRes=dbRes.map((ele)=>{
            ele.image=`https://engineeringworkpro.com/all_img/${ele.image}`
            return ele
        })
        if(dbRes){
            response.status(200).json({
                status:"success",
                message:"get Images successfully",
                data:dbRes
            })
        }

    }
    catch(error){
        console.log(error)
        return response.status(500).json({
            status:"failed",
            message:'failed to get Images',
            error:error
        })
    }
}


exports.delimg = async(request,response)=>{
    try{
        const resImg_path = request.params.emp_id;
        const resdb = await ImgModel.deleteOne({_id:resImg_path});
        if(resdb){
            response.status(201).json({
                status:"success",
                message:"Delete one img successful"
            })
        }
    }
    catch(err){
        response.status(500).json({
            status:"failed",
            message:"delete one img failed",
            error:error.message
        })
    }
}







