RegisterCommand("testreact", function()
    SendNUIMessage({
        message = "Works!"
    })
end)

RegisterCommand("focus", function()
    SetNuiFocus(true, true)
end)
RegisterCommand("removefocus", function()
    SetNuiFocus(false, false)
end)