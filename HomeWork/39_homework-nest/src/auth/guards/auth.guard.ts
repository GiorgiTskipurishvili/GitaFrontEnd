import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.getToken(request.headers)
        if(!token) throw new UnauthorizedException("ტოკენი ვერ მოიძებნა");

        try{
            const payLoad= this.jwtService.verify(token)
            request.userId = payLoad.userId
        }catch(error){
            throw new UnauthorizedException("არასწორი ან ვადაგასული ტოკენი");
        }
        return true
    }

    // getToken(headers){
    //     console.log(headers)
    //     if(!headers["authorization"]) return null

    //     const [type, token] = headers["authorization"].split(" ")
    //     return type === "Bearer" ? token : null
    // }
    getToken(headers: Record<string, any>) { 
    console.log(headers);
    if (!headers["authorization"]) return null;

    const [type, token] = headers["authorization"].split(" ");
    return type === "Bearer" ? token : null;
}
}