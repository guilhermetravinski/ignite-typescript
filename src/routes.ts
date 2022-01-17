import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        duration: 10,
        name: "NodeJS",
        educator: "Dani"
    });

    return response.send();
}