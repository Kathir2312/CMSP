import { ICMDocument } from './IObjects';
import { IContextualMenuItem, IColumn } from 'office-ui-fabric-react';

export class Utils{

    public GetRelativePathFromAbsolute(absoluteUrl) {
                var serverRelativeUrl =
                    absoluteUrl.toLowerCase().replace(window.location.protocol.toLowerCase() + "//" + window.location.host.toLowerCase(), "");
                return serverRelativeUrl;
            }

    public GetImgUrl(fileName: string): string {
        
                let fileNameItems = fileName.split('.');
                let fileExtenstion = fileNameItems[fileNameItems.length - 1];
        
                return this.GetImgUrlByFileExtension(fileExtenstion);
            }
    public GetImgUrlByFileExtension(extension: string): string {
        // cuurently in SPFx with React I didn't find different way of getting the image
        // feel free to improve this
        let imgRoot: string = "https://spoprod-a.akamaihd.net/files/odsp-next-prod_ship-2017-04-21-sts_20170503.001/odsp-media/images/filetypes/16/";
        let imgType = "genericfile.png";
        imgType = extension + ".png";

        switch (extension) {
            case "jpg":
            case "jpeg":
            case "jfif":
            case "gif":
            case "png":
                imgType = "photo.png";
                break;
            case "folder":
                imgType = "folder.svg";
                break;

        }
        return imgRoot + imgType;
    }

    public GetFormatedDate(dateValue: Date): string {
        if (dateValue) {
            let date: string = dateValue.toLocaleString();
            if (date.indexOf(',') > -1) {
                date = date.split(',')[0];
            }
            return date;
        }
        return "";
    }
    
}