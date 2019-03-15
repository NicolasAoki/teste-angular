import { TestBed } from '@angular/core/testing';

import { MensagemServService } from './mensagem-serv.service';

describe('MensagemServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensagemServService = TestBed.get(MensagemServService);
    expect(service).toBeTruthy();
  });
});
