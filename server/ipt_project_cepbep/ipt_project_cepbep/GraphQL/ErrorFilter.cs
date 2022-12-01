namespace ipt_project_cepbep.GraphQL;

public class ErrorFilter : IErrorFilter
{
    public IError OnError(IError error) => error.WithMessage(error.Exception != null ? error.Exception.Message : error.Message);
}