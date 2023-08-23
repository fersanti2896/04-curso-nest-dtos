import { Controller, Get, Param, ParseUUIDPipe, Post, Body, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {
    constructor( 
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ) {
        return this.carsService.findById( id );
    }

    @Post()
    createCar( @Body() createCarDTO: CreateCarDTO ) {
        return createCarDTO;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() body: any ) {
        return body;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
        return {
            msg: 'Delete',
            id
        };
    }
}
