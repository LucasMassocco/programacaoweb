import { getRepository } from 'typeorm'

import { CourseUnit } from '../models/CourseUnit'

interface CourseUnitData {
  name: string
  description: string
}

class CreateCourseUnitService {
  public async execute({ name, description }: CourseUnitData) {
    const courseUnitsRepository = getRepository(CourseUnit)

    const courseUnit = {
      name,
      description
    }

    await courseUnitsRepository.save(courseUnit)

    return courseUnit
  }
}

export { CreateCourseUnitService }
