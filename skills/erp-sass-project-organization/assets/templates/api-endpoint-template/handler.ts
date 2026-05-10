import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RequestHandler } from 'express';

import { UseCaseInterface } from '@/shared/application/use-cases/use-case-interface';

/**
 * API Handler Template
 *
 * @description
 * This template provides a standard structure for API handlers.
 * It follows the dependency injection pattern and uses express.
 */

// Type the handler
type Handler = RequestHandler;

/**
 * Create handler factory
 *
 * @param UseCase - The use case to execute
 * @returns Express request handler
 */
export const createHandlerFactory =
  <RequestDTO, ResponseDTO>(
    UseCase: new () => UseCaseInterface<RequestDTO, ResponseDTO>
  ): Handler =>
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Parse and validate request
      const requestDTO: RequestDTO = req.body as RequestDTO;

      // Execute use case
      const useCase = container.resolve(UseCase);
      const result = await useCase.execute(requestDTO);

      // Send success response
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      // Handle error
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

/**
 * Export handler
 *
 * @description
 * Export the handler for use in routes
 */
export const handler: Handler = createHandlerFactory(UseCase);
