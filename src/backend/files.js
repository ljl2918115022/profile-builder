import { promises,readFile,writeFile } from 'fs';
import {fullPath} from "@/config";

const searchFileProps = async (filePath) => {
    return promises.readdir(filePath,{encoding:'utf-8'});
}

export const searchFile = async (req, res) => {
    const rootPath = __dirname + '/' + 'pic'
    const folders = await searchFileProps(rootPath);
    const fileMap = {};
    for (let folder of folders) {
        const files = await searchFileProps(`${rootPath}/${folder}`);
        fileMap[folder] = files.map(file => `${fullPath}/${folder}/${file}`)
    }

    res.end(JSON.stringify({
        success: true, fileMap
    }));
}

export const uploadFile = function(req, res){
    console.log(req.files[0]);
    readFile(req.files[0].path, function(err, data){
        if(err){
            console.log('Error');
        }else{
            let dir_file = __dirname + '/pic/' + req.files[0].originalname
            console.log(dir_file);
            writeFile(dir_file, data, ()=>{
                let obj = {
                    msg: 'upload success',
                    filename: req.files[0].originalname
                }
                console.log(obj);
                res.send(JSON.stringify(obj));
            })
        }
    })
}